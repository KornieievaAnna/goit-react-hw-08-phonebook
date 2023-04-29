const styles = {
  container: {
    paddingTop: '200px',
    paddingBottom: '200px',
    backgroundImage:
      'linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),url(../images/background.jpg)',
    maxWidth: '1600px',
    height: '600px',
    margin: '0 auto',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>
        Contact manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </section>
  );
}
