import './App.css';
import AdminProfile from './Components/AdminProfile';
import ParentProfile from './Components/ParentProfile';
import TeacherProfile  from './Components/TeacherProfile';
import StudentProfile  from './Components/StudentProfile';
function App() {
  return (
    <div className="App">
   
   <AdminProfile />
   <ParentProfile/>
   <TeacherProfile/>
   <StudentProfile/>
    </div>
  );
}

export default App;
