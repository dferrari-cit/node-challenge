export function validateRegex(text: string): string{
    const regex = new RegExp(/-\d{2}-/);
    const result = regex.exec(text);
    if(result == null){
        if(text.length > 4){
            let result = text.split('-',2);
            let reg = result[0]+'[-\\d]*?-'+result[1];
            return reg;
        }
    }
    return text;
}