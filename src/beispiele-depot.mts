import { PrismaClient } from '@prisma/client';

console.log('=== DEPOT BEISPIEL ===');

const prisma = new PrismaClient({
  log: ['query']
});

async function main() {
  try {
    await prisma.$connect();
    
    // 1. Einzelne Aktie finden
    const aktie = await prisma.aktie.findUnique({ 
      where: { id: 1000 } 
    });
    console.log('Einzelne Aktie:', JSON.stringify(aktie, null, 2));
    
    // 2. Alle Aktien
    const alleAktien = await prisma.aktie.findMany();
    console.log('Alle Aktien:', JSON.stringify(alleAktien, null, 2));
    
    // 3. Anzahl Datensätze
    const anzahlAktien = await prisma.aktie.count();
    console.log('Anzahl Aktien:', anzahlAktien);
    
    const anzahlKurse = await prisma.kurs.count();
    console.log('Anzahl Kurse:', anzahlKurse);
    
    const anzahlTransaktionen = await prisma.transaktion.count();
    console.log('Anzahl Transaktionen:', anzahlTransaktionen);
    
  } catch (error) {
    console.log('Fehler:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
