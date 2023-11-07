import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { RxCross2 } from 'react-icons/rx';

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  showCloseButton?: boolean;
  initialFocus?: any;
  handleVisibility: (value: boolean) => void;
  title?: React.ReactNode | string;
  closeOnOutsideClick?: boolean;
  afterLeave?: () => void;
  className?: string;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const {
    children,
    visible,
    showCloseButton,
    handleVisibility,
    title,
    initialFocus,
    closeOnOutsideClick = true,
    afterLeave,
    className,
  } = props;

  const closeModal = () => {
    if (closeOnOutsideClick) {
      handleVisibility(false);
    }
  };

  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog
        as='div'
        initialFocus={initialFocus}
        className='fixed inset-0 z-50 overflow-y-auto'
        onClose={closeModal}
      >
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black/70' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
            afterLeave={afterLeave}
          >
            <div
              className={`inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl w-fit rounded-2xl ${className}`}
            >
              <div>
                <div className='flex justify-between'>
                  {title &&
                    (typeof title === 'string' ? (
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900'
                      >
                        {title}
                      </Dialog.Title>
                    ) : (
                      title
                    ))}
                  {showCloseButton && (
                    <button
                      className='fixed text-2xl font-black top-4 right-5'
                      onClick={() => handleVisibility(false)}
                    >
                      <RxCross2 />
                    </button>
                  )}
                </div>
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.defaultProps = {
  showCloseButton: true,
};

export default React.memo(Modal);
