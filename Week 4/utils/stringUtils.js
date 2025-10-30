export function extractEmails(text) {
    const regex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g;
    return text.match(regex) || [];
}


export function extractUrls(text) {
    const regex = /(https?:\/\/[^\s]+)/g;
    return text.match(regex) || [];
}


export function wordCount(text) {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
}


export function capitalizeWords(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}

export function reverseString(str) {
    // Use Array.from to correctly handle Unicode code points (including emoji)
    return Array.from(str).reverse().join('');
}
