const shareButton = document.getElementById('shareButton');

    if (navigator.share) {
      shareButton.addEventListener('click', async () => {
        try {
          await navigator.share({
            title: 'Beautiful Social Media Sharing',
            text: 'Check out this awesome page!',
            url: window.location.href
          });
          console.log('Successfully shared');
        } catch (error) {
          console.error('Error sharing:', error);
        }
      });
    } else {
      // Web Share API not supported, provide fallback or message to the user
      shareButton.disabled = true;
      console.log('Web Share API not supported');
    }