export default function() {
    if(typeof(console.log) === 'function') {
        console.log.call(this, ...arguments);
    }
}