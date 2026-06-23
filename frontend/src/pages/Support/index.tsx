import { Typography, Card, Collapse, Row, Col } from 'antd'
import { Phone, Mail, MapPin, HelpCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const { Title } = Typography
const { Panel } = Collapse

const Support = () => {
  const { t } = useTranslation()

  const faqs = [
    {
      key: '1',
      title: '如何选择适合我的3D打印机？',
      content: '选择3D打印机需要考虑多个因素，包括打印尺寸、精度要求、材料兼容性、预算等。FDM打印机适合初学者和日常使用，SLA打印机适合高精度需求，SLS适合工业级应用。',
    },
    {
      key: '2',
      title: '耗材的保质期是多久？',
      content: 'PLA耗材通常建议在开封后6个月内使用完，ABS和PETG可以保存更长时间。建议将耗材存放在干燥的环境中，避免受潮。',
    },
    {
      key: '3',
      title: '打印机需要定期维护吗？',
      content: '是的，定期维护包括清洁喷嘴、检查皮带张力、润滑导轨、校准床面等。建议每打印50-100小时进行一次全面维护。',
    },
    {
      key: '4',
      title: '支持哪些支付方式？',
      content: '我们支持信用卡、PayPal、银行转账等多种支付方式。海外客户推荐使用PayPal进行支付。',
    },
    {
      key: '5',
      title: '配送范围和时间？',
      content: '我们提供全球配送服务。国内订单通常3-5个工作日送达，国际订单根据目的地不同需要7-15个工作日。',
    },
    {
      key: '6',
      title: '保修政策是怎样的？',
      content: '所有设备享有1年质保服务，耗材不享受质保。在质保期内，我们提供免费维修或更换服务。',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title level={1} className="mb-8">{t('support.title')}</Title>

        <section className="mb-12" id="faq">
          <Title level={2} className="mb-6">{t('support.faq')}</Title>
          <Card>
            <Collapse defaultActiveKey={['1']} ghost>
              {faqs.map((faq) => (
                <Panel key={faq.key} header={faq.title}>
                  <p>{faq.content}</p>
                </Panel>
              ))}
            </Collapse>
          </Card>
        </section>

        <section className="mb-12" id="contact">
          <Title level={2} className="mb-6">{t('support.contact')}</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('support.phone')}</h3>
                <p className="text-gray-600">+1-800-3D-PRINT</p>
                <p className="text-gray-500 text-sm">周一至周五 9:00-18:00</p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('support.email')}</h3>
                <p className="text-gray-600">support@3dprint.com</p>
                <p className="text-gray-500 text-sm">24小时内回复</p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('support.address')}</h3>
                <p className="text-gray-600">123 Innovation Street</p>
                <p className="text-gray-500 text-sm">Tech City, CA 94043</p>
              </Card>
            </Col>
          </Row>
        </section>

        <section id="service">
          <Title level={2} className="mb-6">{t('support.service')}</Title>
          <Card>
            <div className="flex items-start gap-4">
              <HelpCircle className="w-10 h-10 text-primary-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">售后服务承诺</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ 设备1年质保，免费维修或更换</li>
                  <li>✓ 7x24小时技术支持热线</li>
                  <li>✓ 免费技术培训和操作指导</li>
                  <li>✓ 终身软件升级服务</li>
                  <li>✓ 全球配送和安装服务</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default Support
