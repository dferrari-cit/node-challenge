export function validateDay(text): string{
    if(text > 3){
        const result = text.split('-',3);
        result[1] = result[1].length < 2 ? '0' + result[1]: result[1];
        result[1] = result.length == 2 ? result[1]+',' : result[1];
        return result.toString().replace(/,/g,'-');
    }
    return text;
}