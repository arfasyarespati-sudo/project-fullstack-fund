// 1. Membuat Class (Cetakan)
class Kendaraan {
  // Constructor untuk inisialisasi properti (data)
  constructor(merk, warna) {
    this.merk = merk;
    this.warna = warna;
    this._kecepatan = 0; // Properti private semu (konvensi)
  }

  // Method (Perilaku)
  jalan() {
    this._kecepatan += 10;
    return `${this.merk} berwarna ${this.warna} berjalan dengan kecepatan ${this._kecepatan} km/jam.`;
  }

  // Getter (Mengambil data secara aman)
  get infoKecepatan() {
    return `Kecepatan saat ini: ${this._kecepatan} km/jam.`;
  }
}

// 2. Inheritance (Pewarisan)
class Mobil extends Kendaraan {
  constructor(merk, warna, jenisBahanBakar) {
    // Memanggil constructor milik class induk (Kendaraan)
    super(merk, warna); 
    this.bahanBakar = jenisBahanBakar;
  }

  // Polymorphism (Mengubah perilaku method induk / Overriding)
  jalan() {
    return `${super.jalan()} Mobil ini menggunakan ${this.bahanBakar}.`;
  }
}

// 3. Instansiasi (Membuat Objek dari Class)
const mobilSaya = new Mobil("Toyota", "Hitam", "Pertamax");

// 4. Eksekusi Kode
console.log(mobilSaya.jalan()); 
// Output: Toyota berwarna Hitam berjalan dengan kecepatan 10 km/jam. Mobil ini menggunakan Pertamax.

console.log(mobilSaya.infoKecepatan); 
// Output: Kecepatan saat ini: 10 km/jam.