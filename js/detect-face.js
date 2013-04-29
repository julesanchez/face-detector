importScripts("HAAR-canvas.js","haarcascade_frontalface_alt.js");

onmessage = function (event){
    var imagedata = event.data.imagedata;

    postMessage({
          status: 'starting'
        });

    var detector = new HAAR.Detector(haarcascade_frontalface_alt).complete(
      function(){
        postMessage({
          status: 'complete',
          image_id: event.data.image_id,
          objects: (this.objects.length > 0)
        });
      }
    ).detect(imagedata, 1, 1.25, 0.1, 1, true);
};
