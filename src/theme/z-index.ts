const mapping = ['access-nav', 'site-header'];

export const zIndex = (key: string) => (mapping.includes(key) ? mapping.indexOf(key) + 1 : 0);
