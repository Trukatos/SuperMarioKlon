function createDashboardLayer(font, playerEnv) {
  const LINE1 = font.size;
  const LINE2 = font.size * 2;

  //const score = 24500;
  //const coins = 13;
 
  function padStart(string, length, pad) {
    if(pad !== undefined && pad.length > 0) {
      while(string.length < length) {
        string = pad + string;
      }
    }
    return string;
  }

  return function drawDashboard(context) {
    const time = playerEnv.playerController.time;
    const score = playerEnv.playerController.score;
    const coins = playerEnv.playerController.coins;

    font.print("MARIO", context, 16, LINE1);
    font.print(padStart(score.toString(), 6, "0"), context, 16, LINE2);

    font.print("@x" + padStart(coins.toString(), 2, "0"), context, 96, LINE2);

    font.print("WORLD", context, 152, LINE1);
    font.print(currentWorld + "-" + currentLevel, context, 160, LINE2);

    font.print("TIME", context, 208, LINE1);
    font.print(padStart(time.toFixed().toString(), 3, "0"), context, 216, LINE2);
  }
}