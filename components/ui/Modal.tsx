import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	imageUrl: string;
	content: string | JSX.Element;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, imageUrl, content }) => {
	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50 font-blinker" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-foreground px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:p-6">
								<div className="absolute top-0 right-0 pt-4 pr-4">
									<button
										type="button"
										className="focus:outline-none cursor-pointer"
										onClick={onClose}
									>
										<XMarkIcon
											className="h-6 w-6 text-primary"
											aria-hidden="true"
										/>
									</button>
								</div>
								{imageUrl && (
									<img
										src={imageUrl}
										alt="Modal Image"
										className="w-full mb-4 rounded-md mt-8"
									/>
								)}
								<Dialog.Title
									as="h3"
									className="text-lg leading-6 font-medium text-white"
								>
									{title}
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-sm text-gray-500">{content}</p>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};
