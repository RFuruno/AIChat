window.onload = function() {
  const sendButton = document.getElementById('send-button');
  sendButton.addEventListener('click', async function() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value;

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY',
      },
      body: JSON.stringify({
        'prompt': message,
        'max_tokens': 128,
      }),
    });

    const data = await response.json();
    const result = data.choices[0].text;

    messageInput.value = result;
  });
};