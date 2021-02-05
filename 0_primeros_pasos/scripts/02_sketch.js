let monoSynth;

function setup() {
  let cnv = createCanvas(400, 100);
  cnv.parent('sketch-holder')
  cnv.mousePressed(playSynth);
  background(random(255), random(255), random(255));
  textAlign(CENTER);
  text('Haz clic aquí', width/2, height/2);

  monoSynth = new p5.MonoSynth();
}

function playSynth() {
  userStartAudio();
  background(random(255), random(255), random(255));
  let note = random(['Fb5', 'G5', 'A4', 'Ds5']);
  // note velocity (volume, from 0 to 1)
  let velocity = random();
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 2/6;

  monoSynth.play(note, velocity, time, dur);
}
