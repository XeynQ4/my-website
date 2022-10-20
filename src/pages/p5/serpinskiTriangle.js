function sketch(p) {
    let w = p.windowWidth - 60;
    let h = p.windowHeight - 60;
    let angle = 0;
    const iterCount = 100;

    let radius = w <= h ? w / 2 - 20 : h / 2 - 20;
    const steps = 3;
    let anchors = [];
    let currentPoint;
    const step = p.TWO_PI / steps;

    p.setup = function () {
        p.createCanvas(w, h);

        p.translate(w / 2, h / 2);
        // circle(0, 0, radius);

        angle = -p.HALF_PI;
        for (let i = 0; i < steps; i++) {
            let x = radius * p.cos(angle);
            let y = radius * p.sin(angle);
            anchors[i] = p.createVector(x, y);

            // p.stroke('red');
            // p.strokeWeight(10);
            // p.point(x, y);

            // p.strokeWeight(1);
            // p.stroke(0, 0, 0);

            angle += step;
        }

        let x = p.random(-radius, radius);
        let y = p.random(-radius, radius);
        currentPoint = p.createVector(x, y);
        p.point(x, y);
    };

    p.draw = function () {
        p.translate(w / 2, h / 2);

        // Runs the code iterCount times per draw loop
        for (let j = 0; j < iterCount; j++) {
            // Slowly erases old points
            // background(255, 255, 255, 1);

            // Let's anchors stay on screen if erasing
            // for (let i of anchors) {
            //     stroke('red');
            //     strokeWeight(10);
            //     point(i.x, i.y);

            //     strokeWeight(5);
            //     stroke(0, 0, 0);
            // }

            let nextAnchor = p.random(anchors);

            let nextX = (currentPoint.x + nextAnchor.x) / 2;
            let nextY = (currentPoint.y + nextAnchor.y) / 2;

            let nextPoint = p.createVector(nextX, nextY);
            currentPoint = nextPoint;
            p.point(nextX, nextY);
        }
    };

    p.windowResized = function () {
        w = p.windowWidth - 60;
        h = p.windowHeight - 60;
        radius = w <= h ? w / 2 - 20 : h / 2 - 20;

        angle = -p.HALF_PI;

        // anchors.splice(0, anchors.length);

        for (let i = 0; i < steps; i++) {
            let x = radius * p.cos(angle);
            let y = radius * p.sin(angle);
            anchors[i] = p.createVector(x, y);

            console.log(anchors);

            p.stroke('red');
            p.strokeWeight(10);
            p.point(x, y);

            p.strokeWeight(1);
            p.stroke(0, 0, 0);

            angle += step;
        }

        p.resizeCanvas(w, h);
    };
}

export default sketch;
