function getGradientColor(percent, startColor, endColor) {
    const startR = parseInt(startColor.substring(1, 3), 16);
    const startG = parseInt(startColor.substring(3, 5), 16);
    const startB = parseInt(startColor.substring(5, 7), 16);
  
    const endR = parseInt(endColor.substring(1, 3), 16);
    const endG = parseInt(endColor.substring(3, 5), 16);
    const endB = parseInt(endColor.substring(5, 7), 16);
  
    const diffR = endR - startR;
    const diffG = endG - startG;
    const diffB = endB - startB;
  
    const percentR = Math.floor(startR + (diffR * percent));
    const percentG = Math.floor(startG + (diffG * percent));
    const percentB = Math.floor(startB + (diffB * percent));
  
    return `#${percentR.toString(16).padStart(2, '0')}${percentG.toString(16).padStart(2, '0')}${percentB.toString(16).padStart(2, '0')}`;
  }
  
  function gradientText(text, options) {
    const { from, to, direction = 'right' } = options;
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      const percent = direction === 'right' ? i / (text.length - 1) : (text.length - 1 - i) / (text.length - 1);
      const color = getGradientColor(percent, from, to);
      result += `\x1b[38;2;${parseInt(color.substring(1, 3), 16)};${parseInt(color.substring(3, 5), 16)};${parseInt(color.substring(5, 7), 16)}m${text[i]}\x1b[0m`;
    }
  
    return result;
  }
  
module.exports = { gradientText };