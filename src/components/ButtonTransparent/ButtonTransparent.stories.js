import ButtonTransparent from './ButtonTransparent'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Buttons/ButtonTransparent',
  component: ButtonTransparent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const OverflowLetters = {
  args: {
    nombreBoton: 'fdsafdsafdsafdsafdsafdsafdsafdsafdsaf',
    link: 'https://pomofocus.io/icons/graph-white.png',
  },
}

export const BigPicture = {
  args: {
    nombreBoton: 'Prueba',
    link: 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  },
}
