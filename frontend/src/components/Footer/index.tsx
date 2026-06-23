import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Printer } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const Footer = () => {
  const { t } = useTranslation()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Printer className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold">{t('header.logo')}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t('common.contact')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('common.products')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=device" className="text-gray-400 hover:text-white transition-colors">
                  FDM 桌面级打印机
                </Link>
              </li>
              <li>
                <Link to="/products?category=device" className="text-gray-400 hover:text-white transition-colors">
                  SLA 光固化打印机
                </Link>
              </li>
              <li>
                <Link to="/products?category=material" className="text-gray-400 hover:text-white transition-colors">
                  PLA 耗材
                </Link>
              </li>
              <li>
                <Link to="/products?category=material" className="text-gray-400 hover:text-white transition-colors">
                  光敏树脂
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('common.support')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/support#faq" className="text-gray-400 hover:text-white transition-colors">
                  {t('support.faq')}
                </Link>
              </li>
              <li>
                <Link to="/support#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('support.contact')}
                </Link>
              </li>
              <li>
                <Link to="/support#service" className="text-gray-400 hover:text-white transition-colors">
                  {t('support.service')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('support.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1-800-3D-PRINT</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@3dprint.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>123 Innovation Street, Tech City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')} {currentYear} {t('header.logo')}. {t('footer.privacy')} | {t('footer.terms')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
