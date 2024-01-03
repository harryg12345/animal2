function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VRwVHR8GI/model.json', modelLoaded);
}
function modelLoaded()
{
    classifier.classify(getResult)
    
}