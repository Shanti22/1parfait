$(document).ready(function(){
  // Marcar la pagina activa en el navbar
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  $('.navbar-nav a[href="'+filename+'"]').addClass('active');
});

  $(document).ready(function() {
    
    $(window).scroll(function() {
      $('.fade-in').each(function() {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(this).addClass('fade-in-active');
        }
      });
    });
  });

  var apiKey='AIzaSyCfBMXZme4KlnWg33qTnjbn_qXEoqx611U';

  var channelId='UCly5gP2hg6HN_qxwIFGHciA';

  var maxResults=1;

  var apiUrl = 'https://www.googleapis.com/youtube/v3/search?key=' + apiKey +
                     '&channelId=' + channelId + '&order=date&part=snippet&type=video&maxResults=' + maxResults;
                     fetch(apiUrl)
                     .then(response => response.json())
                     .then(data => {
                         
                         var videoId = data.items[0].id.videoId;
                         var videoTitle = data.items[0].snippet.title;
         
                         
                         var videoContainer = document.getElementById('video-container');
                         var iframe = document.createElement('iframe');
                         iframe.src = 'https://www.youtube.com/embed/' + videoId;
                         iframe.width = '560';
                         iframe.height = '315';
                         iframe.title = videoTitle;
                         videoContainer.appendChild(iframe);
                     })
                     .catch(error => console.error('Error al obtener los datos del vídeo:', error));