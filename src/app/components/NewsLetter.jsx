export default function NewsletterComponent() {
  return (
    <section className='flex flex-col gap-4 lg:flex-row justify-around items-center py-12 bg-gradient-to-r from-green-600 to-green-700 text-white w-full'>
      <div>
        <h2 className='text-xl text-center lg:flex-2xl font-bold w-80'>Daftar sekarang untuk membantu mencintai bumi</h2>
      </div>

      <div className=''>
        <button className='bg-white text-green-600 px-8 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors'>Daftar Sekarang →</button>
      </div>
    </section>
  );
}
