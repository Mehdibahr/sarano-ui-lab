export type CategoryItem = {
  id: string;
  label: string;
  href: string;
  icon?: string;
  subCategories?: CategoryItem[];
  isFeatured?: boolean;
};

export type NavigationConfig = {
  mainNav: CategoryItem[];
  shopCategories: CategoryItem[];
};

export const NAVIGATION: NavigationConfig = {
  mainNav: [
    { id: 'home', label: 'خانه', href: '/' },
    { id: 'shop', label: 'فروشگاه', href: '/shop' },
    { id: 'credit', label: 'دریافت اعتبار', href: '/credit-guide' },
    { id: 'org', label: 'فروش سازمانی', href: '/org-sales' },
    { id: 'blog', label: 'بلاگ', href: '/blog' },
  ],
  shopCategories: [
    {
      id: 'digital',
      label: 'کالای دیجیتال',
      href: '/shop/digital',
      subCategories: [
        { id: 'mobiles', label: 'موبایل', href: '/shop/digital/mobiles' },
        { id: 'laptops', label: 'لپ‌تاپ', href: '/shop/digital/laptops' },
        { id: 'cameras', label: 'دوربین', href: '/shop/digital/cameras' },
        { id: 'accessories', label: 'لوازم جانبی', href: '/shop/digital/accessories' },
      ]
    },
    {
      id: 'appliances',
      label: 'لوازم خانگی',
      href: '/shop/appliances',
      subCategories: [
        { id: 'fridge', label: 'یخچال و فریزر', href: '/shop/appliances/refrigerators' },
        { id: 'tv', label: 'تلویزیون', href: '/shop/appliances/tv' },
        { id: 'laundry', label: 'ماشین لباسشویی', href: '/shop/appliances/laundry' },
      ]
    },
    {
      id: 'beauty',
      label: 'زیبایی و سلامت',
      href: '/shop/beauty',
      subCategories: [
        { id: 'perfume', label: 'عطر و ادکلن', href: '/shop/beauty/perfume' },
        { id: 'makeup', label: 'لوازم آرایشی', href: '/shop/beauty/makeup' },
      ]
    }
  ]
};