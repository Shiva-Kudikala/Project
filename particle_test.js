function test(){
    
    for(let i=0; i < 60; i++) {
        createParticle();

    }

}

function create(){
    let x = Math.random() * 1920;
    let y = Math.random() * 1080;
    let particle = document.createElement('particle');
    particle.style.position = 'absolute';
    particle.style.left = x+'px';
    particle.style.top = y+'px';    
    particle.style.width = '13px';
    particle.style.height = '13px';
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = 'rgb(50,50,50)';
    particle.style.zIndex = '50';
    document.getElementById('bgdiv').appendChild(particle);
}

test();