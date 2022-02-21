import { Menu, Layout } from 'antd'
import Main from './components/Main';

// const { Header, Content, Footer } = Layout // can use destructuring like in the docs

const styles = {
  header: {
      position: 'fixed',
      zIndex: 10,
      width: '100%',
      color: 'white',
    },
  content: {
    padding: '0 50px',
    marginTop: 64,
  },
}

function App() {
  return (
    <Layout>
      <Layout.Header style={styles.header}>
        Much Todo
      </Layout.Header>
      <Layout.Content style={styles.content}>
        <Main />
      </Layout.Content>
      <Layout.Footer>&copy; 2022, Boca Code.</Layout.Footer>
    </Layout>
  );
}

export default App;
