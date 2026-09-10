import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buat Keneisya — Ada Pesan Kecil dari Aku" },
      {
        name: "description",
        content:
          "Sebuah surat permintaan maaf dan kupon manja virtual buat Keneisya, dari pacar LDR-nya yang kemarin kelewat sibuk.",
      },
      { property: "og:title", content: "Buat Keneisya — Ada Pesan Kecil dari Aku" },
      {
        property: "og:description",
        content: "Surat maaf kecil dan tiga kupon manja virtual buat kamu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const coupons = [
  {
    title: "Kupon Bebas Ngomel",
    desc: "Kamu bebas ngomel atau curhat selama 15 menit di telepon, aku bakal dengerin full tanpa motong omongan sama sekali!",
    tilt: "-rotate-1",
  },
  {
    title: "Kupon Teleponan Sampe Tidur",
    desc: "Kupon buat teleponan nemenin kamu tidur. Aku yang bakal nungguin dan mastiin kamu merem duluan, baru aku matiin teleponnya.",
    tilt: "rotate-1",
  },
  {
    title: "Kupon Request Free Time",
    desc: "Kamu berhak nentuin jam teleponan kita berikutnya kapan aja, dan aku wajib kosongin jadwal di jam itu khusus buat kamu.",
    tilt: "-rotate-[0.5deg]",
  },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [claimed, setClaimed] = useState<number[]>([]);

  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-24 pt-14 sm:pt-20">
      <section className="flex flex-col items-center text-center">
        <div className="paper -rotate-3 rounded-sm p-3 pb-14 sm:p-4 sm:pb-16">
          <img
            src="/assets/keneisya.png"
            alt="Foto Keneisya"
            className="h-72 w-60 object-cover sm:h-80 sm:w-72"
          />
          <p className="font-hand mt-4 -mb-8 text-2xl text-muted-foreground">
            kamu, favoritku ♡
          </p>
        </div>

        <h1 className="font-hand mt-12 text-4xl leading-tight text-foreground sm:text-5xl">
          Hai Keneisya, ada pesan kecil dari aku untukmu...
        </h1>

        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="mt-8 rounded-2xl bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-500 hover:-translate-y-0.5 hover:brightness-105"
          >
            klik di sini sebentar ya
          </button>
        )}
      </section>

      {open && (
        <div className="fade-up">
          <section className="paper ruled tape mt-14 rounded-md border border-border px-6 py-10 sm:px-10">
            <h2 className="font-hand mb-6 text-3xl text-foreground">maaf ya...</h2>
            <div className="space-y-5 text-[15px] leading-8 text-foreground/85">
              <p>
                Hai Keneisya, maafin aku ya. Belakangan ini aku bener-bener lagi sibuk banget
                sama duniaku sendiri sampai jarang telepon kamu.
              </p>
              <p>
                Jujur kemarin aku salah mengira. Karena kamu sering bilang capek, aku mikirnya
                dengan ga telepon dan ngasih kamu waktu buat istirahat itu adalah pilihan yang
                paling bener. Tapi ternyata aku salah, pemikiranku itu justru malah bikin kamu
                ngerasa dicuekin atau ngerasa nomor dua. Maaf ya udah bikin kamu nungguin
                kabarku.
              </p>
              <p>
                Kita kan LDR dan belum pernah ketemu, jadi kabaran atau teleponan itu berharga
                banget buat kita. Kesibukan kemarin murni karena salahku yang berantakan ngatur
                jadwal dan salah paham, bukan karena rasa sayangku ke kamu berkurang ya. Ke
                depannya aku mau bener-bener perbaiki ini. Sebisanya aku bakal selalu luangin
                waktu buat teleponan dan dengerin cerita kamu tiap hari. Makasih ya udah sabar
                banget ngadepin aku. I miss you.
              </p>
            </div>
            <p className="font-hand mt-8 text-right text-2xl text-primary">— tyo</p>
          </section>

          <div className="mt-12 flex justify-center">
            <div className="paper rotate-2 rounded-sm p-2.5 pb-10">
              <img
                src="/assets/keneisya-2.png"
                alt="Foto Keneisya lainnya"
                className="h-44 w-36 object-cover sm:h-52 sm:w-44"
              />
            </div>
          </div>

          <section className="mt-14">
            <p className="text-center text-[15px] leading-7 text-muted-foreground">
              Sebagai tanda penebusan dosaku karena udah terlalu sibuk, aku punya sesuatu buat
              kamu. Kamu berhak klaim kupon-kupon di bawah ini kapan aja kita teleponan nanti!
              😉
            </p>

            <div className="mt-9 space-y-7">
              {coupons.map((c, i) => {
                const isClaimed = claimed.includes(i);
                return (
                  <div key={c.title} className={c.tilt}>
                    <div
                      className={`ticket rounded-lg px-6 py-6 transition-opacity duration-500 ${
                        isClaimed ? "opacity-50" : "opacity-100"
                      }`}
                    >
                      <div className="border-y border-dashed border-border py-5">
                        <h3 className="font-hand text-3xl text-foreground">{c.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{c.desc}</p>
                        <button
                          onClick={() => {
                            if (isClaimed) return;
                            setClaimed((p) => [...p, i]);
                            window.open("https://discord.com", "_blank", "noopener,noreferrer");
                          }}
                          disabled={isClaimed}
                          className="mt-4 rounded-xl bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:translate-y-0 disabled:bg-secondary disabled:text-secondary-foreground"
                        >
                          {isClaimed ? "Sudah diklaim" : "Klaim"}
                        </button>
                      </div>
                    </div>
                    {isClaimed && (
                      <p className="fade-up mt-2 px-6 text-xs text-primary">
                        Kupon berhasil diaktifkan! Hubungi aku di Discord pas kita call nanti ya.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <p className="font-hand mt-16 text-center text-2xl text-muted-foreground">
            ditunggu ya teleponnya ♡
          </p>
        </div>
      )}
    </main>
  );
}
