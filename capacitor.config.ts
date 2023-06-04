import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cultivar_pi',
  webDir: 'dist/cultivar',
  server: {
    androidScheme: 'https'
  }
};

export default config;
