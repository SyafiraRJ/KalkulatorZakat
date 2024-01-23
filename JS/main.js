let gaji = 0; //variabel untuk menyimpan nilai gaji

    function cekZakat() {
        const info = document.getElementById('hasil');
        const zakat = 0.025;
        const hasil = gaji * zakat;
        info.innerHTML = `Kewajiban zakat kamu sebanyak : ${formatAngka(hasil)}`;

    }

    function formatRupiah(input) {
        // Fungsi untuk menambahkan format Rupiah pada input
        
        gaji = parseFloat(input.value.replace(/\D/g, '') || 0);
        
        // Mengonversi nilai numerik ke string Rupiah
        const formattedGaji = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(gaji);
    
        input.value = formattedGaji;


    }

    function formatAngka(nominal) { 
        // Fungsi untuk menambahkan pemisah ribuan pada angka
        return new Intl.NumberFormat('id-ID', { style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0 }).format(nominal);
        // Mengonversi nilai numerik ke string Rupiah 
        //style: 'currency': Menunjukkan bahwa kita ingin memformat angka sebagai mata uang.
        //currency: 'IDR': Menunjukkan kode mata uang yang digunakan, Rupiah Indonesia (IDR).
    }