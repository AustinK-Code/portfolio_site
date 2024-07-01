import { Button, ButtonGroup } from '@mui/material'

const Navigation = () => {
  return (
    <nav>
        <ButtonGroup variant='text' aria-label='Basic Button Group'>
            <Button>
              <a href="#about-me">About Me</a>
            </Button>
            <Button>
              <a href="#projects">Projects</a>
            </Button>
            <Button>
              <a href="#contact">Contact</a>
            </Button>
        </ButtonGroup>
    </nav>
    )
}

export default Navigation