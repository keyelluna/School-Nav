import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import LaunchPage from './components/LaunchPage';
import AccountSelection from './components/AccountSelection';
import SignIn from './components/SignIn';
import StudentSignUp from './components/StudentSignUp';
import FacultySignUp from './components/FacultySignUp';
import HomePage from './components/HomePage';
import { setCurrentUser } from './utils/localStorage';

type Screen = 'launch' | 'account-selection' | 'student-signin' | 'student-signup' | 'faculty-signin' | 'faculty-signup' | 'home';
type UserType = 'visitor' | 'student' | 'faculty' | null;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('launch');
  const [userType, setUserType] = useState<UserType>(null);

  const handleLaunchComplete = () => {
    setCurrentScreen('account-selection');
  };

  const handleAccountSelect = (type: 'visitor' | 'student' | 'faculty') => {
    setUserType(type);
    if (type === 'visitor') {
      setCurrentScreen('home');
    } else if (type === 'student') {
      setCurrentScreen('student-signin');
    } else {
      setCurrentScreen('faculty-signin');
    }
  };

  const handleSignInSuccess = () => {
    setCurrentScreen('home');
  };

  const handleGoToSignUp = () => {
    if (userType === 'student') {
      setCurrentScreen('student-signup');
    } else if (userType === 'faculty') {
      setCurrentScreen('faculty-signup');
    }
  };

  const handleSignUpSuccess = () => {
    setCurrentScreen('home');
  };

  const handleBackToAccountSelection = () => {
    setCurrentScreen('account-selection');
    setUserType(null);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentScreen('launch');
    setUserType(null);
  };

  return (
    <div className="min-h-screen w-full">
      <AnimatePresence>
        {currentScreen === 'launch' && (
          <motion.div key="launch">
            <LaunchPage onComplete={handleLaunchComplete} />
          </motion.div>
        )}
        {currentScreen === 'account-selection' && (
          <motion.div key="account-selection">
            <AccountSelection onSelect={handleAccountSelect} />
          </motion.div>
        )}
        {currentScreen === 'student-signin' && (
          <motion.div key="student-signin">
            <SignIn 
              userType="student" 
              onSignInSuccess={handleSignInSuccess}
              onGoToSignUp={handleGoToSignUp}
              onBack={handleBackToAccountSelection}
            />
          </motion.div>
        )}
        {currentScreen === 'faculty-signin' && (
          <motion.div key="faculty-signin">
            <SignIn 
              userType="faculty" 
              onSignInSuccess={handleSignInSuccess}
              onGoToSignUp={handleGoToSignUp}
              onBack={handleBackToAccountSelection}
            />
          </motion.div>
        )}
        {currentScreen === 'student-signup' && (
          <motion.div key="student-signup">
            <StudentSignUp 
              onSignUpSuccess={handleSignUpSuccess}
              onBack={handleBackToAccountSelection}
            />
          </motion.div>
        )}
        {currentScreen === 'faculty-signup' && (
          <motion.div key="faculty-signup">
            <FacultySignUp 
              onSignUpSuccess={handleSignUpSuccess}
              onBack={handleBackToAccountSelection}
            />
          </motion.div>
        )}
        {currentScreen === 'home' && (
          <motion.div key="home">
            <HomePage userType={userType} onLogout={handleLogout} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}