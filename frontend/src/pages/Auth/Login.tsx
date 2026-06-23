import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { Form, Input, Button, Typography, Card } from 'antd'
import { Lock, User as UserIcon } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { login as loginApi } from '@/api/users'
import { login } from '@/store/slices/user'

const { Title } = Typography

const Login = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (values: { username: string; password: string }) => {
    setLoading(true)
    setError('')
    try {
      const result = await loginApi(values)
      dispatch(login({ user: result.user, token: result.token }))
      navigate('/')
    } catch (err) {
      setError('Invalid username or password')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <Card className="w-full max-w-md">
        <div className="text-center mb-6">
          <Title level={2}>{t('user.loginTitle')}</Title>
        </div>

        {error && (
          <div className="mb-4 text-red-500 text-center">{error}</div>
        )}

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Form.Item
            name="username"
            label={t('user.username')}
            rules={[{ required: true, message: t('user.username') }]}
          >
            <Input
              prefix={<UserIcon className="w-4 h-4" />}
              placeholder={t('user.username')}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={t('user.password')}
            rules={[{ required: true, message: t('user.password') }]}
          >
            <Input.Password
              prefix={<Lock className="w-4 h-4" />}
              placeholder={t('user.password')}
            />
          </Form.Item>

          <Form.Item className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-primary-600">
              {t('user.forgotPassword')}
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full"
            >
              {t('header.login')}
            </Button>
          </Form.Item>

          <p className="text-center text-gray-500">
            {t('user.noAccount')} <Link to="/register" className="text-primary-600">{t('header.register')}</Link>
          </p>
        </Form>
      </Card>
    </div>
  )
}

export default Login
