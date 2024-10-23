import { LoadingSpinner } from '@/components/spinner';
import { isMobileDevice } from '@/lib/utils/is-mobile';

export default async function Loading() {
  const isMobile = await isMobileDevice();

  return (
    <div className="text-ui-fg-base flex h-screen items-center justify-center px-4 pb-14 pt-[6.5rem]">
      <LoadingSpinner size={isMobile ? 36 : 54} />
    </div>
  );
}
