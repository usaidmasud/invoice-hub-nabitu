import { Box, IconButton } from "@mui/material";

interface CustomIconButtonProps {
  iconSrc: string; // Path ke gambar ikon
  altText: string; // Teks alternatif untuk ikon
  showBadge?: boolean; // Apakah menampilkan badge (notifikasi)
  badgeColor?: string; // Warna badge
  onClick?: () => void; // Fungsi yang dijalankan saat tombol diklik
}

export default function CustomIconButton({
  iconSrc,
  altText,
  showBadge = false,
  badgeColor = "#DC3545",
  onClick,
}: CustomIconButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        bgcolor: "#EFF4FB",
        p: "8px",
        width: 34,
        height: 34,
        border: "0.5px solid #E2E8F0",
        position: "relative", // Untuk positioning badge
      }}
      color="inherit"
    >
      {/* Badge (Notifikasi) */}
      {showBadge && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 10,
            height: 10,
            border: "2px solid #fff",
            borderRadius: "50%",
            backgroundColor: badgeColor,
          }}
        />
      )}

      {/* Ikon */}
      <Box
        component="img"
        src={iconSrc}
        alt={altText}
        sx={{ width: 18, height: 18 }}
      />
    </IconButton>
  );
}
