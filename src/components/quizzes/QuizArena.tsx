import React, { useState, useMemo } from 'react';
import { QuizQuestion, UserProgress } from '../../types';
import { QUIZ_QUESTIONS } from '../../data/quizzes';
import { CheckCircle2, XCircle, RotateCcw, Award, ChevronRight, BookOpen, Filter } from 'lucide-react';

interface QuizArenaProps {
  onQuizCompleted?: (scorePercent: number, total: number) => void;
  userProgress?: UserProgress;
}

export const QuizArena: React.FC<QuizArenaProps> = ({ onQuizCompleted }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [reviewOnlyMissed, setReviewOnlyMissed] = useState<boolean>(false);

  // Filter pool
  const availableQuestions = useMemo(() => {
    return QUIZ_QUESTIONS.filter((q) => {
      const matchSubject = selectedSubject === 'all' || q.subject === selectedSubject;
      const matchDiff = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      return matchSubject && matchDiff;
    });
  }, [selectedSubject, selectedDifficulty]);

  // Start new quiz session
  const startQuiz = (questionsToUse?: QuizQuestion[]) => {
    const pool = questionsToUse || [...availableQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    setSessionQuestions(pool);
    setCurrentIndex(0);
    setUserAnswers({});
    setIsAnswerSubmitted(false);
    setIsQuizFinished(false);
    setReviewOnlyMissed(false);
  };

  // Start initial quiz if none loaded
  React.useEffect(() => {
    if (sessionQuestions.length === 0 && availableQuestions.length > 0) {
      startQuiz();
    }
  }, [availableQuestions]);

  const currentQ = sessionQuestions[currentIndex];

  const handleSelectOption = (optIndex: number) => {
    if (isAnswerSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: optIndex }));
    setIsAnswerSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 < sessionQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsAnswerSubmitted(userAnswers[currentIndex + 1] !== undefined);
    } else {
      // Quiz finished
      setIsQuizFinished(true);
      const correctCount = sessionQuestions.reduce((acc, q, idx) => {
        return acc + (userAnswers[idx] === q.correctIndex ? 1 : 0);
      }, 0);
      const percent = Math.round((correctCount / sessionQuestions.length) * 100);
      if (onQuizCompleted) {
        onQuizCompleted(percent, sessionQuestions.length);
      }
    }
  };

  const totalScore = useMemo(() => {
    if (!sessionQuestions.length) return 0;
    return sessionQuestions.reduce((acc, q, idx) => {
      return acc + (userAnswers[idx] === q.correctIndex ? 1 : 0);
    }, 0);
  }, [sessionQuestions, userAnswers]);

  const scorePercent = sessionQuestions.length ? Math.round((totalScore / sessionQuestions.length) * 100) : 0;

  const missedQuestions = useMemo(() => {
    return sessionQuestions.filter((q, idx) => userAnswers[idx] !== q.correctIndex);
  }, [sessionQuestions, userAnswers]);

  return (
    <div className="space-y-6">
      {/* Subject and Difficulty Filter Bar */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mr-1">
            <Filter className="w-3.5 h-3.5" /> Subject:
          </span>
          {[
            { id: 'all', label: 'All Subjects' },
            { id: 'physics', label: 'Physics' },
            { id: 'chemistry', label: 'Chemistry' },
            { id: 'biology', label: 'Biology' },
            { id: 'astronomy', label: 'Astronomy' },
            { id: 'earth', label: 'Earth Science' }
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setSelectedSubject(s.id);
                // restart
                const pool = QUIZ_QUESTIONS.filter(
                  (q) => (s.id === 'all' || q.subject === s.id) && (selectedDifficulty === 'all' || q.difficulty === selectedDifficulty)
                ).sort(() => 0.5 - Math.random()).slice(0, 10);
                startQuiz(pool);
              }}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                selectedSubject === s.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Difficulty filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono">Difficulty:</span>
          {['all', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
            <button
              key={diff}
              onClick={() => {
                setSelectedDifficulty(diff);
                const pool = QUIZ_QUESTIONS.filter(
                  (q) => (selectedSubject === 'all' || q.subject === selectedSubject) && (diff === 'all' || q.difficulty === diff)
                ).sort(() => 0.5 - Math.random()).slice(0, 10);
                startQuiz(pool);
              }}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                selectedDifficulty === diff
                  ? 'bg-slate-800 text-cyan-400 border border-cyan-500/60'
                  : 'bg-slate-950 text-slate-500 hover:text-slate-300 border border-slate-800'
              }`}
            >
              {diff === 'all' ? 'All Levels' : diff}
            </button>
          ))}
        </div>
      </div>

      {/* Main Quiz Flow */}
      {!isQuizFinished && currentQ ? (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
          {/* Progress Ribbon */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="capitalize text-cyan-400">
              {currentQ.subject} · {currentQ.difficulty} Level
            </span>
            <span>
              Question <strong className="text-slate-200">{currentIndex + 1}</strong> of{' '}
              {sessionQuestions.length}
            </span>
          </div>

          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
            <div
              className="bg-cyan-500 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <h3 className="text-lg md:text-xl font-bold text-slate-100 leading-snug">
            {currentQ.question}
          </h3>

          {/* Multiple Choice Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = userAnswers[currentIndex] === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;
              let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                } else {
                  btnStyle = 'bg-slate-950/40 border-slate-900 text-slate-500';
                }
              }

              return (
                <button
                  key={optIdx}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full p-4 rounded-xl border text-left flex items-center justify-between text-sm transition-all ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-xs font-semibold text-slate-300 shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswerSubmitted && (
                    <div>
                      {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                      {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Scientific Explanation Panel when submitted */}
          {isAnswerSubmitted && (
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold">
                {userAnswers[currentIndex] === currentQ.correctIndex ? (
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                  </span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Incorrect Answer
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-end pt-2">
            {isAnswerSubmitted && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs rounded-xl shadow-lg transition-colors"
              >
                <span>{currentIndex + 1 === sessionQuestions.length ? 'View Results' : 'Next Question'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : isQuizFinished ? (
        /* Results & Review Screen */
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center mx-auto text-cyan-400">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-100">Quiz Completed!</h3>
            <p className="text-sm text-slate-400 mt-1">Here is how you performed in this session:</p>
          </div>

          {/* Score Circle */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-sm mx-auto space-y-2">
            <div className="text-5xl font-mono font-bold text-cyan-300 tabular-nums">
              {scorePercent}%
            </div>
            <div className="text-xs text-slate-400 font-mono">
              {totalScore} out of {sessionQuestions.length} correct
            </div>
            <div className="text-xs font-medium pt-2">
              {scorePercent >= 80 ? (
                <span className="text-emerald-400">Excellent scientific comprehension!</span>
              ) : scorePercent >= 60 ? (
                <span className="text-cyan-400">Solid understanding of core principles.</span>
              ) : (
                <span className="text-amber-400">Good effort! Review missed questions to reinforce concepts.</span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => startQuiz()}
              className="flex items-center gap-2 px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Try Again (New Questions)
            </button>

            {missedQuestions.length > 0 && (
              <button
                onClick={() => {
                  setReviewOnlyMissed(true);
                  startQuiz(missedQuestions);
                }}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" /> Review Missed Questions ({missedQuestions.length})
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
