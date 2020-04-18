const DosDetector = require('./dosDetector')

const dosDetector = new DosDetector(2000)

dosDetector.addUrl("https://www.youtube.com/watch?v=TlB_eWDSMt4")

setTimeout(() => {
    dosDetector.addUrl("https://www.youtube.com/watch?v=TlB_eWDSMt4")
}, 500)