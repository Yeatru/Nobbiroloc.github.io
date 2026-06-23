import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Form, Input, Button, Typography, Card } from 'antd'
import { Lock, User as UserIcon, Mail, Phone } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { register } from '@/api/users'

const { Title } = Typography

const Register = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (values: {
    username: string
    password: string
    confirmPassword: string
    email?: string
    phone?: string
  }) => {
    if (values.password !== values.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    setError('')
    try {
      await register({
        username: values.username,
        password: values.password,
        email: values.email,
        phone: values.phone,
      })
      navigate('/login')
    } catch (err) {
      setError('Registration failed')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <Card className="w-full max-w-md">
        <div className="text-center mb-6">
          <Title level={2}>{t('user.registerTitle')}</Title>
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
            name="email"
            label={t('user.email')}
            rules={[{ type: 'email', message: 'Invalid email' }]}
          >
            <Input
              prefix={<Mail className="w-4 h-4" />}
              placeholder={t('user.email')}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label={t('user.phone')}
          >
            <Input
              prefix={<Phone className="w-4 h-4" />}
              placeholder={t('user.phone')}
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

          <Form.Item
            name="confirmPassword"
            label={t('user.confirmPassword')}
            rules={[{ required: true, message: t('user.confirmPassword') }]}
          >
            <Input.Password
              prefix={<Lock className="w-4 h-4" />}
              placeholder={t('user.confirmPassword')}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full"
            >
              {t('header.register')}
            </Button>
          </Form.Item>

          <p className="text-center text-gray-500">
            {t('user.hasAccount')} <Link to="/login" className="text-primary-600">{t('header.login')}</Link>
          </p>
        </Form>
      </Card>
    </div>
  )
}

export default Register
