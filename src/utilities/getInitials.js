const getInitials = names => names.map(name => name[0].toUpperCase()).join('.');

export default getInitials;