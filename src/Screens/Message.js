import React from 'react';

const Message = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🌻 A Message Just for You</h1>
      <p style={styles.paragraph}>
        Happy Anniversary, lovey! You probably didn't expect we'd be able to go this far, but I do. As you have said, it's not because you don't trust me; it's your attitude that you're afraid of if I can handle it, but guess what? I can handle it! As days go by, as our relationship progresses, I'm still trying to figure out how to put a smile on your face even though you're mad. I want to know you more; I want to know you best. I want to be the person you'll seek when the world is too much for you. I just want you to feel that there will always be a person that is willing to be there for you, always, regardless of the circumstances. 
      </p>
      <p style={styles.paragraph}>
        The day I met you was not the best day of my life; it was the beginning of the best days of my life. I really am happy to meet such a wonderful person. A person who makes me want to do more and achieve so much more in life. With you I am the happiest; with you I can be the strongest version of myself. You give me strength, you give me love, and you give me everything I never knew I'd get from anyone. I love you so much, lovey! Cheers to our endless love!
      </p>
      <p style={styles.signature}>Giving you all the love I can give, <br /> — Your Boyfriend - Eggyop</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    background: 'linear-gradient(135deg, #fff9e5, #ffe4a1)',
    minHeight: '100vh',
    fontFamily: "'Patrick Hand', cursive",
    color: '#5a4e2e',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    color: '#d4a018',
    marginBottom: '30px',
    textShadow: '1px 1px #fff8dc',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto 20px',
    textAlign: 'justify',
    textIndent: '2em',
  },
  signature: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#a67400',
    marginTop: '40px',
    textAlign: 'center',
  },
};

export default Message;
