const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/mlgc-nendy-bucket/model.json');
}
module.exports = loadModel;