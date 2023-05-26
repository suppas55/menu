const botToken = '5831405992:AAHZq80BHxL2j-bZRHud-bG3ladDdBTqLak';



const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <p>I am connected to the bot with the token: {botToken}</p>
      <div>
        <ReplyKeyboardMarkup>
          <InlineKeyboardButton
            text="Open Web App"
            url="https://aroimenu.s3.ap-southeast-1.amazonaws.com/menu2.html"
          />
        </ReplyKeyboardMarkup>
      </div>
    </div>
  );
};

const TelegramWebApp = require('telegram-web-app');

const app = new TelegramWebApp({
  botToken: botToken
});

app.mount('#app');

