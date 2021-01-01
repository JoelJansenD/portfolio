import './style/App.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SvgIcon from '@material-ui/core/SvgIcon';
import Navbar from "./components/Navbar";
import hero from "./static/hero.svg";
import data from "./static/data.json";
import Project from './components/Project';
import Skill from "./components/Skill";
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="landing">
				<h1>Hi, I'm Joel</h1>
				<a href="#" className="subtitle">Let's talk <SvgIcon><ArrowForwardIcon /></SvgIcon></a>
				<img className="hero" src={hero} />
			</div>
			<div className="content">
				<Project project={data.featured} />
				<div className="skills">
					{data.skills.map((s, index) => <Skill skill={s} key={index} />)}
				</div>
				{data.projects.map((p, index) => <Project project={p} key={index} />)}
			</div>
			<Footer />
		</div>
	);
}

export default App;
