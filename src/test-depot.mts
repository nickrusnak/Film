// Einfacher Test für Depot-Datenbank
import { PrismaClient } from '@prisma/client';

console.log('=== DEPOT TEST START ===');

const prisma = new PrismaClient({
  log: ['query']
});

async function test() {
  try {
    await prisma.$connect();
    console.log('✅ Verbindung zur Datenbank erfolgreich');
    
    // Einfache Abfrage - nur COUNT
    const count = await prisma.aktie.count();
    console.log(`✅ Anzahl Aktien: ${count}`);
    
    // Einfache Abfrage - erste 2 Aktien
    const aktien = await prisma.aktie.findMany({
      take: 2,
      select: {
        id: true,
        symbol: true,
        name: true
      }
    });
    console.log('✅ Erste 2 Aktien:', aktien);
    
    console.log('=== DEPOT TEST ERFOLGREICH ===');
    
  } catch (error) {
    console.log('❌ FEHLER:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

test();
