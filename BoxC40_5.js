<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>インタラクティブなサイコロゲーム</title>


<style>
  body {
    font-size: 24px; /* Adjust the font size as needed */
  }
  button {
    font-size: 24px; /* Adjust the font size as needed */
  }
</style>
<style>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
</style>


<div style="text-align: center;">
  <!-- Your existing content here -->
</div>


<script>
let a = 0;
let b = 0;
let c = 0;
let totalCount = 0; // 総数カウンター

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollAlpha() {
    const alpha = rollDice(6);
    document.getElementById('alphaResult').innerText = 'αの結果: ' + alpha;
    if (alpha % 2 !== 0) {
        document.getElementById('betaButton').style.display = 'inline';
    } else {
        document.getElementById('gammaButton').style.display = 'inline';
    }
    // Hide alpha button after rolling
    document.getElementById('alphaButton').style.display = 'none';
}

function rollBeta() {
    a = rollDice(12);
    document.getElementById('betaResult').innerText = 'βの結果: ' + a;
    document.getElementById('deltaButton').style.display = 'inline';
    // Hide beta button after rolling
    document.getElementById('betaButton').style.display = 'none';
}

function rollGamma() {
    a = rollDice(8);
    document.getElementById('gammaResult').innerText = 'γの結果: ' + a;
    document.getElementById('deltaButton').style.display = 'inline';
    // Hide gamma button after rolling
    document.getElementById('gammaButton').style.display = 'none';
}

function rollDelta() {
    b = rollDice(10);
    c = a * b;
    // Adjust c if it's greater than 40
    c = c % 40;
    document.getElementById('deltaResult').innerText = 'δの結果: ' + b + ' したがって c = ' + c;
    document.getElementById('epsilonButton').style.display = 'inline';
    // Hide delta button after rolling
    document.getElementById('deltaButton').style.display = 'none';

}

function rollEpsilon() {
    const epsilon = rollDice(6);
    let color = (epsilon % 2 !== 0) ? 'blue' : 'white';
    const epsilonResult = document.getElementById('epsilonResult');
    epsilonResult.innerText = 'εの結果: ' + epsilon + ' したがって色は ' + color;
    epsilonResult.style.color = '青'; // Set the text color to 青
    totalCount += c;

    // 色に基づいて青と白の玉の個数を計算
    let blueCount = color === 'blue' ? c : 40 - c;
    let whiteCount = color === 'white' ? c : 40 - c;

    // 最終結果を表示
    document.getElementById('finalResult').innerText = '箱 Ｃ の青は ' + blueCount + ' 個、白は ' + whiteCount + ' 個になりました。';
    // Hide epsilon button after rolling
    document.getElementById('epsilonButton').style.display = 'none';
}


</script>
</head>
<body>

<button id="alphaButton" onclick="rollAlpha()">箱Cのαのサイコロを振る</button>
<p id="alphaResult"></p>

<button id="betaButton" onclick="rollBeta()" style="display:none;">βのサイコロを振る</button>
<p id="betaResult"></p>

<button id="gammaButton" onclick="rollGamma()" style="display:none;">γのサイコロを振る</button>
<p id="gammaResult"></p>

<button id="deltaButton" onclick="rollDelta()" style="display:none;">δのサイコロを振る</button>
<p id="deltaResult"></p>

<button id="epsilonButton" onclick="rollEpsilon()" style="display:none;">εのサイコロを振る</button>
<p id="epsilonResult"></p>
<p id="finalResult"></p> <!-- 最終的な結果を表示する部分 -->

</body>
</html>
