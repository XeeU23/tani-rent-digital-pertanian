import { Cloud, Sun, CloudRain, Thermometer, Droplets, Wind } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WeatherWidget = () => {
  // Mock weather data - in real app this would come from weather API
  const weatherData = {
    location: "Jakarta Timur",
    temperature: 32,
    condition: "Berawan",
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: "Hari ini", temp: 32, condition: "cloudy", icon: Cloud },
      { day: "Besok", temp: 29, condition: "rainy", icon: CloudRain },
      { day: "Lusa", temp: 33, condition: "sunny", icon: Sun },
    ]
  };

  return (
    <Card className="bg-gradient-card shadow-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Cuaca Pertanian</h3>
          <div className="text-sm text-muted-foreground">{weatherData.location}</div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-3">
            <Cloud className="w-8 h-8 text-primary" />
            <div>
              <div className="text-2xl font-bold text-foreground">{weatherData.temperature}°C</div>
              <div className="text-sm text-muted-foreground">{weatherData.condition}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span className="text-muted-foreground">Kelembaban:</span>
              <span className="font-medium">{weatherData.humidity}%</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Wind className="w-4 h-4 text-green-500" />
              <span className="text-muted-foreground">Angin:</span>
              <span className="font-medium">{weatherData.windSpeed} km/h</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="text-sm font-medium text-muted-foreground mb-2">Prakiraan 3 Hari</div>
          <div className="grid grid-cols-3 gap-2">
            {weatherData.forecast.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center p-2 rounded-lg bg-background/50">
                  <div className="text-xs text-muted-foreground mb-1">{item.day}</div>
                  <Icon className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <div className="text-sm font-medium">{item.temp}°C</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 p-3 bg-accent/50 rounded-lg">
          <div className="text-sm text-accent-foreground">
            <strong>Rekomendasi:</strong> Cuaca mendukung untuk aktivitas penyemprotan dan pemupukan. 
            Hindari penanaman karena prediksi hujan besok.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;