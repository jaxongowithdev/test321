import { motion } from 'motion/react';
import { CreditCard, Copy, Check, Heart } from 'lucide-react';
import { bankInfo } from './constants';
import { copyToClipboard } from './utils';

interface BankInfoSectionProps {
  copiedField: string | null;
  setCopiedField: (field: string | null) => void;
}

export const BankInfoSection = ({ copiedField, setCopiedField }: BankInfoSectionProps) => {
  const handleCopy = async (text: string, field: string) => {
    try {
      await copyToClipboard(text, field, setCopiedField);
    } catch (error) {
      console.error('Copy error:', error);
    }
  };

  const InfoField = ({ 
    label, 
    value, 
    fieldName 
  }: { 
    label: string; 
    value: string; 
    fieldName: string; 
  }) => {
    const isCopied = copiedField === fieldName;
    
    return (
      <div>
        <label className="font-sans text-muted-foreground text-sm mb-2 block">
          {label}
        </label>
        <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-rose-100/50 dark:border-rose-800/50 group hover:border-rose-200 dark:hover:border-rose-700 transition-colors">
          <span className="font-bodoni text-card-foreground font-semibold flex-1 select-all">
            {value}
          </span>
          
          <motion.button
            onClick={() => handleCopy(value, fieldName)}
            className="p-2 rounded-lg bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors relative group/button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Copy ${fieldName}`}
          >
            {isCopied ? 
              <Check className="w-4 h-4 text-green-600" /> : 
              <Copy className="w-4 h-4" />
            }
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/button:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {isCopied ? 'Đã copy!' : 'Copy to clipboard'}
            </div>
          </motion.button>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Clean card design */}
      <div className="bg-card rounded-2xl p-8 border border-rose-200/30 shadow-lg transition-colors duration-500"
           style={{ boxShadow: '0 10px 40px -10px rgba(244, 63, 94, 0.1)' }}>
        
        {/* Simple header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-rose-100 rounded-xl">
            <CreditCard className="w-6 h-6 text-rose-600" />
          </div>
          <div>
            <h3 className="font-serif text-rose-600 text-xl">Thông tin chuyển khoản</h3>
            <div className="w-16 h-px bg-rose-300 mt-2" />
          </div>
        </div>

        <div className="space-y-5">
          {/* Account Number */}
          <InfoField 
            label="Số tài khoản"
            value={bankInfo.accountNumber}
            fieldName="số tài khoản"
          />

          {/* Account Holder */}
          <InfoField 
            label="Chủ tài khoản"
            value={bankInfo.accountHolder}
            fieldName="tên chủ tài khoản"
          />

          {/* Bank Name */}
          <InfoField 
            label="Ngân hàng"
            value={bankInfo.bankName}
            fieldName="tên ngân hàng"
          />
        </div>



        {/* Simple thank you message */}
        <div className="mt-8 text-center p-6 bg-gradient-to-r from-rose-50/80 to-pink-50/80 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl border border-rose-100/50 transition-colors duration-500">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span className="font-script text-rose-600 text-lg">Cảm ơn bạn yêu</span>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          </div>
          <p className="font-sans text-muted-foreground text-sm">
            Tấm lòng của bạn là món quà quý giá nhất cho chúng mình!
          </p>
        </div>
      </div>
    </motion.div>
  );
};