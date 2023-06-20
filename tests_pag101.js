var avatar = "generic";
var skill = 1.0;
var pointsPerLevel1 = 1000;
var userPoints = 2008;

function getAvatar(points) {
    var level = points / pointsPerLevel1;

    if (level == 0) {
        return "Teddy Bear";
    }
    else if (level == 1) {
        return "Cat";
    }
    else if (level >= 2) {
        return "Gorilla";
    }
}
function updatePoints(bonus, newPoints) {
    var i = 0;
    while (i < bonus) {
        newPoints = newPoints + skill + bonus;
        i = i + 1;
    }
    return newPoints + userPoints;
}

userPoints = updatePoints(0, 100);
avatar = getAvatar(3000);
console.log("O usuário fez " + userPoints + " pontos.");
console.log("Veja o avatar: " + avatar)