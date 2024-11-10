class shape{
    paint(){
        console.info(`paint shape`);
    }
}

class circle extends shape{
    paint(){
        super.paint();
        console.info(`paint circle`);
    }
}

const circle = new circle();
circle.paint();
