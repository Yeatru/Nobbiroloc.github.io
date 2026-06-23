import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd'
import { store } from '@/store'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import ProductDetail from '@/pages/Products/ProductDetail'
import Articles from '@/pages/Articles'
import ArticleDetail from '@/pages/Articles/ArticleDetail'
import UserCenter from '@/pages/UserCenter'
import OrderList from '@/pages/UserCenter/OrderList'
import Login from '@/pages/Auth/Login'
import Register from '@/pages/Auth/Register'
import Cart from '@/pages/Cart'
import Support from '@/pages/Support'
import './i18n/config'

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: '#3b82f6',
            colorBgBase: '#f9fafb',
          },
        }}
      >
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<ArticleDetail />} />
                <Route path="/user" element={<UserCenter />} />
                <Route path="/user/orders" element={<OrderList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/support" element={<Support />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ConfigProvider>
    </Provider>
  )
}

export default App
