import './App.css'
import { useState, useEffect } from 'react'

import {
  Menu,
  MenuItem,
} from '@mui/material'

import {
  ButtonTransparent,
  ButtonInBox,
  ButtonWhite,
  Line,
  WhiteLine,
  AddTaskBox,
  LittleLine,
} from '@components'

function App() {
  const [title, setTitle] = useState('Time to focus!')
  const [num, setNum] = useState('40:00')
  const [stil, setStil] = useState({ backgroundColor: '#B74949' })
  const [anchorEl, setAnchorEl] = useState(null)
  const [color, setColor] = useState({ color: '#B74949' })

  const handleClickPomodoro = () => {
    document.title = '40:00 - Time to focus!'
    setStil({ backgroundColor: '#B74949' })
    setTitle('Time to focus!')
    setNum('40:00')
    setColor({ color: '#B74949' })
  }

  const handleClickShort = () => {
    document.title = '8:00 - Time for a break!'
    setStil({ backgroundColor: '#38858A' })
    setTitle('Time for a break!')
    setNum('08:00')
    setColor({ color: '#38858A' })
  }

  const handleClickLong = () => {
    document.title = '15:00 - Time to focus!'
    setStil({ backgroundColor: '#397097' })
    setTitle('Time for a break!')
    setNum('15:00')
    setColor({ color: '#397097' })
  }

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    document.title = '40:00 - Time to focus!'
  }, [])

  return (
    <div className="App">
      <div className="upperPart" style={stil}>
        <div className="upBar">
          <nav>
            <div className="pomo">
              <img src="https://pomofocus.io/images/icon-white2.png" alt="Pomofocus" />
              <h2>Pomofocus</h2>
            </div>

            <span>
              <ButtonTransparent nombreBoton="Report" link="https://pomofocus.io/icons/graph-white.png" />
              <ButtonTransparent nombreBoton="Setting" link="https://pomofocus.io/icons/config-white.png" />
              <ButtonTransparent nombreBoton="Login" link="https://pomofocus.io/icons/user-white.png" />
            </span>
          </nav>
          <div className="lineDiv">
            <Line />
          </div>

          <div className="caja">
            <div className="cajaTransparente">
              <div className="button-row">
                <ButtonInBox onclick={handleClickPomodoro} nombreBoton="Pomodoro" />
                <ButtonInBox onclick={handleClickShort} nombreBoton="Short Break" />
                <ButtonInBox onclick={handleClickLong} nombreBoton="Long Break" />
              </div>
              <div className="contador">{num}</div>
              <ButtonWhite estilo={color} nombreBoton="START" />
            </div>

            <p>#0</p>
            <p>{title}</p>

            <div className="task-line">
              <h2>Tasks</h2>
              <button type="submit" onClick={handleMenuClick}>
                <img src="https://pomofocus.io/icons/threedots-white.png" alt="three dots" />
              </button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                className="drop-down"
              >
                <MenuItem>
                  <img src="https://pomofocus.io/icons/delete-black.png" alt="delete img" style={{ opacity: '0.8', marginRight: '8px', width: '14px' }} />
                  Clear finished tasks
                </MenuItem>
                <MenuItem>
                  <img src="https://pomofocus.io/icons/clear-black.png" alt="delete img" style={{ opacity: '0.8', marginRight: '8px', width: '14px' }} />
                  Clear act pomodoros
                </MenuItem>
                <MenuItem>
                  <img src="https://pomofocus.io/icons/save-black2.png" alt="delete img" style={{ opacity: '0.8', marginRight: '8px', width: '14px' }} />
                  Save as template
                </MenuItem>
                <MenuItem>
                  <img src="https://pomofocus.io/icons/plus-black.png" alt="delete img" style={{ opacity: '0.8', marginRight: '8px', width: '14px' }} />
                  Add from templates
                </MenuItem>
                <MenuItem>
                  <img src="https://pomofocus.io/icons/integration-black.png" alt="delete img" style={{ opacity: '0.8', marginRight: '8px', width: '14px' }} />
                  Import from Todoist
                </MenuItem>
                <MenuItem>
                  <img src="https://pomofocus.io/icons/delete-black.png" alt="delete img" style={{ opacity: '0.8', marginRight: '8px', width: '14px' }} />
                  Clear all tasks
                </MenuItem>
              </Menu>
            </div>
            <WhiteLine />

            <AddTaskBox />

          </div>

        </div>
      </div>

      <div className="lowerParts">
        <div className="title container">
          <h1>An online Pomodoro Timer to boost your productivity</h1>
        </div>

        <div className="what container">
          <h2 className="what-title">What is Pomofocus?</h2>
          <LittleLine />
          <p>
            Pomofocus is a customizable pomodoro timer that works on
            desktop & mobile browser. The aim of this app is to help
            you focus on any task you are working on, such as study,
            writing, or coding. This app is inspired by
            <a href="https://francescocirillo.com/products/the-pomodoro-technique"> Pomodoro Technique </a>
            which is a time management method developed by Francesco Cirillo.
          </p>
        </div>

        <div className="what2 container">
          <h2 className="what-title">What is Pomodoro Technique?</h2>
          <LittleLine />
          <p>
            The Pomodoro Technique is created by Francesco Cirillo for a
            more productive way to work
            and study. The technique uses a timer to break down work into intervals, traditionally
            25 minutes in length, separated by short breaks. Each interval is known as a pomodoro,
            from the Italian word for &apos;tomato&apos;, after the
            tomato-shaped kitchen timer that Cirillo
            used as a university student. -
            <a href="http://localhost:5173/"> Wikipedia</a>
          </p>
        </div>

        <div className="how container">
          <h2 className="what-title">How to use the Pomodoro Timer?</h2>
          <LittleLine />
          <ol>
            <li>
              <strong>Add tasks </strong>
              to work on today
            </li>
            <li>
              <strong>Set estimate pomodoros </strong>
              (1 = 25min of work) for each tasks
            </li>
            <li>
              <strong>Select a task </strong>
              to work on
            </li>
            <li>
              <strong>Start timer </strong>
              and focus on the task for 25 minutes
            </li>
            <li>
              <strong>Take a break </strong>
              for 5 minutes when the alarm ring
            </li>
            <li>
              <strong>Iterate </strong>
              3-5 until you finish the tasks
            </li>
          </ol>
        </div>

        <div className="basic container">
          <h2 className="what-title">Basic Features</h2>
          <LittleLine />
          <ul>
            <li>
              <strong> Estimate Finish Time: </strong>
              Get an estimate of the time required to complete your daily tasks.
            </li>
            <li>
              <strong> Add Templates: </strong>
              Save your repetitive tasks as templates and add them with just one click.
            </li>
            <li>
              <strong> Visual Reports: </strong>
              See how much time you&apos;ve focused each day, week, and month.
            </li>
            <li>
              <strong> Custom Settings: </strong>
              Personalize your focus/break time, alarm sounds, background sounds, and more.
            </li>
          </ul>
        </div>

        <div className="premium container">
          <h2 className="what-title">Premium Features</h2>
          <LittleLine />
          <ul>
            <li>
              <strong>Add Projects: </strong>
              Track how much time you spend on each project.
            </li>
            <li>
              <strong>Yearly Reports: </strong>
              View your focus hours for each year.
            </li>
            <li>
              <strong>Download Reports: </strong>
              Download your focus history in CSV format.
            </li>
            <li>
              <strong>No Template Limit: </strong>
              Save more than 3 templates.
            </li>
            <li>
              <strong>Todoist Integration: </strong>
              Load tasks from your Todoist account.
            </li>
            <li>
              <strong>No Ads: </strong>
              Enjoy a clean and distraction-free app experience.
            </li>
          </ul>
        </div>

        <div className="download container">
          <h2 className="what-title">Premium Features</h2>
          <LittleLine />
          <ul>
            <li>
              <a href="https://pomofocus.io/downloadable/pomofocus-darwin-x64-1.1.0.zip">For macOS </a>
              (zip file) *Right click the icon to open
            </li>
            <li>
              <a href="https://pomofocus.io/downloadable/pomofocus-1.1.0-setup.zip">For Windows </a>
              (zip file)
            </li>
          </ul>
        </div>

        <div className="footer">
          <div className="links">
            <a href="https://pomofocus.io/">HOME</a>
            <a href="https://pomofocus.io/privacy">PRIVACY</a>
            <a href="pomofocus@gmail.com">CONTACT</a>
            <a href="https://pomofocus.io/app">SIMPLE PAGE</a>
          </div>
        </div>

        <div className="redes">
          <a href="https://www.facebook.com/pomofocus">
            <img src="https://pomofocus.io/icons/facebook.png" alt="" />
          </a>
          <a href="https://twitter.com/pomofocus">
            <img src="https://pomofocus.io/icons/twitter.png" alt="" />
          </a>
          <a href="https://climate.stripe.com/kfwPBZ">
            <img src="https://pomofocus.io/icons/stripe-climate-badge.png" alt="" />
          </a>
        </div>

        <div className="me">
          Made with &lt;3 by Yuya Uzu
        </div>

        <div className="derechos">©Pomofocus 2023. All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default App
