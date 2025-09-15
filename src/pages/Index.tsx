import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <img 
              src="/img/2c1bf4af-002b-4f82-b503-44150b24ef22.jpg" 
              alt="Alipay" 
              className="w-20 h-20 mx-auto mb-6 rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Пополнение кошелька
            <span className="block text-blue-600">Alipay</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Быстрое и безопасное пополнение вашего Alipay кошелька с минимальными комиссиями. 
            Деньги поступают мгновенно!
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Пополнить сейчас
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Преимущества нашего сервиса
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Мгновенные переводы
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Средства поступают на ваш Alipay кошелек в течение 1-3 минут после подтверждения платежа
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Shield" className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Безопасность
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Все транзакции защищены банковским уровнем шифрования и проходят через защищенные каналы
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Percent" className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Низкие комиссии
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Конкурентные тарифы от 0.5% с прозрачной системой ценообразования без скрытых платежей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Statistics */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150K+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Успешных операций</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5 лет</div>
              <div className="text-gray-600">На рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Certificates */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Лицензии и сертификаты
          </h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <img 
                src="/img/fb405cb4-8c94-42d2-9c12-50e2a8d0fc4c.jpg" 
                alt="SSL Certificate" 
                className="w-12 h-12"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">SSL 256-bit</div>
                <div className="text-sm text-gray-600">Шифрование</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <Icon name="Shield" className="text-green-600" size={48} />
              <div className="text-left">
                <div className="font-semibold text-gray-900">PCI DSS</div>
                <div className="text-sm text-gray-600">Сертификат</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <Icon name="Lock" className="text-blue-600" size={48} />
              <div className="text-left">
                <div className="font-semibold text-gray-900">ISO 27001</div>
                <div className="text-sm text-gray-600">Безопасность</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Отзывы наших клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Пользуюсь сервисом уже полгода. Деньги всегда приходят быстро, комиссии действительно низкие. Поддержка отвечает мгновенно."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">А</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Анна К.</div>
                    <div className="text-sm text-gray-500">Предприниматель</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Отличный сервис! Раньше мучился с пополнением Alipay, теперь всё решается за пару кликов. Рекомендую всем."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">М</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Михаил Р.</div>
                    <div className="text-sm text-gray-500">Импортёр</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Безопасно и надёжно. Все операции проходят без проблем, техподдержка всегда на связи. Доверяю только этому сервису."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">Е</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Елена С.</div>
                    <div className="text-sm text-gray-500">Маркетолог</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Icon name="Shield" className="text-green-600 mx-auto mb-4" size={64} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              100% гарантия возврата средств
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Если по нашей вине средства не поступят на ваш кошелек в течение 24 часов, 
              мы вернём вам деньги в полном объёме + компенсация 500 рублей за неудобства.
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Возврат в течение 1 часа</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} />
                <span>Без дополнительных вопросов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Как пополнить кошелек
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Укажите данные кошелька
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Введите номер вашего Alipay кошелька и сумму пополнения. Минимальная сумма — 100 рублей.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Выберите способ оплаты
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Оплатите удобным способом: банковской картой, через СБП, Qiwi, WebMoney или криптовалютой.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Получите средства
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  После успешной оплаты деньги автоматически поступят на ваш Alipay кошелек в течение 1-3 минут.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Готовы пополнить кошелек?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Начните прямо сейчас — это займет всего пару минут
          </p>
          
          <Card className="p-8 max-w-md mx-auto">
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Номер Alipay кошелька
                </label>
                <Input 
                  placeholder="+86 138 0013 8000"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сумма пополнения (₽)
                </label>
                <Input 
                  placeholder="1000"
                  type="number"
                  className="w-full"
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-xl">
                Пополнить кошелек
                <Icon name="CreditCard" className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-center">
        <div className="container mx-auto">
          <p className="text-gray-400">
            © 2024 Сервис пополнения Alipay. Все права защищены.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;