import {
  Box,
  Heading,
  useMediaQuery,
  Text,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  List,
  ListItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const BookingWidget = () => {
  const [isDesktop] = useMediaQuery('(min-width: 1180px)');
  const [isTablet] = useMediaQuery('(min-width: 575px)');
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [range, setRange] = useState<DateRange>();
  const [guests, setGuests] = useState<number>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const newRange: DateRange = {
      from: checkIn,
      to: checkOut,
    };
    setRange(newRange);
  }, [checkOut, checkIn]);

  let footerIn = (
    <Text marginTop={'3px'} fontSize={'sm'}>
      Please select a date.
    </Text>
  );
  if (checkIn) {
    footerIn = (
      <Text
        marginTop={'3px'}
        fontSize={'sm'}
        textDecor={'underline'}
        cursor={'pointer'}
        onClick={() => setCheckIn(undefined)}
      >
        Clear
      </Text>
    );
  }
  let footerOut = (
    <Text marginTop={'3px'} fontSize={'sm'}>
      Minimum 2 night stay.
    </Text>
  );
  if (checkOut) {
    footerOut = (
      <Text
        marginTop={'3px'}
        fontSize={'sm'}
        textDecor={'underline'}
        cursor={'pointer'}
        onClick={() => setCheckOut(undefined)}
      >
        Clear
      </Text>
    );
  }

  const submitForm = () => {
    if (checkIn && checkOut && guests) {
      const checkInFormatted = `${format(checkIn, 'yyyy')}-${format(
        checkIn,
        'MM',
      )}-${format(checkIn, 'dd')}`;
      const checkOutFormatted = `${format(checkOut, 'yyyy')}-${format(
        checkOut,
        'MM',
      )}-${format(checkOut, 'dd')}`;
      window.open(
        `https://hotels.cloudbeds.com/reservation/b5AkPT?#checkin=${checkInFormatted}&checkout=${checkOutFormatted}`,
        '_blank',
      );
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Box
        display={'flex'}
        flexDir={isTablet ? 'row' : 'column'}
        w={isDesktop ? '920px' : isTablet ? '500px' : '330px'}
        h={isDesktop ? '74px' : isTablet ? 'calc(74px*2)' : '100%'}
        alignContent={'center'}
        alignItems={'center'}
        bg={'white'}
        flexWrap={isDesktop ? 'nowrap' : 'wrap'}
        overflow={'hidden'}
        boxShadow={'md'}
        sx={{
          '& .custom-day-picker-theme-selected': {
            '&:hover': {
              backgroundColor: 'brand.800',
            },
            backgroundColor: 'brand.600',
            color: 'white',
          },
          '& .custom-day-picker-theme-today:not(.custom-day-picker-theme-selected)':
            {
              backgroundColor: 'brandAlpha.100',
            },
          '& .rdp-button:not(.custom-day-picker-theme-selected):hover': {
            backgroundColor: 'brandAlpha.200 !important',
          },
        }}
      >
        <Popover>
          <PopoverTrigger>
            <Box
              flex={isTablet ? 1 : 'auto'}
              display={'flex'}
              flexDirection={'column'}
              gap={'12px'}
              justifyContent={'center'}
              pl={'16px'}
              height={isDesktop ? '100%' : '74px'}
              borderRight={isTablet ? '3px solid' : 'none'}
              borderBottom={isTablet ? 'none' : '3px solid'}
              borderColor={'brand.200'}
              minWidth={'100px'}
              cursor={'pointer'}
              width={'100%'}
            >
              <Text
                fontSize={'12px'}
                color={error && !checkIn ? 'red' : 'black'}
              >
                CHECK IN
              </Text>
              <Heading fontSize={'12px'} fontWeight={'200'} color={'brand.700'}>
                {checkIn ? format(checkIn, 'PP') : 'Add Date'}
              </Heading>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <DayPicker
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                footer={footerIn}
                fromDate={new Date()}
                toDate={checkOut}
                modifiersClassNames={{
                  selected: 'rdp-day_selected custom-day-picker-theme-selected',
                  today: 'custom-day-picker-theme-today',
                }}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Box
              flex={isTablet ? 1 : 'auto'}
              display={'flex'}
              flexDirection={'column'}
              gap={'12px'}
              justifyContent={'center'}
              pl={'16px'}
              height={isDesktop ? '100%' : '74px'}
              borderRight={isTablet ? '3px solid' : 'none'}
              borderBottom={isTablet ? 'none' : '3px solid'}
              borderColor={'brand.200'}
              minWidth={'100px'}
              cursor={'pointer'}
              width={'100%'}
            >
              <Text
                fontSize={'12px'}
                color={error && !checkOut ? 'red' : 'black'}
              >
                CHECK OUT
              </Text>
              <Heading fontSize={'12px'} fontWeight={'200'} color={'brand.700'}>
                {checkOut ? format(checkOut, 'PP') : 'Add Date'}
              </Heading>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <DayPicker
                mode="range"
                selected={range}
                onDayClick={setCheckOut}
                footer={footerOut}
                fromDate={checkIn || new Date()}
                disabled={checkIn || new Date()}
                min={3}
                max={29}
                modifiersClassNames={{
                  selected: 'rdp-day_selected custom-day-picker-theme-selected',
                  today: 'custom-day-picker-theme-today',
                }}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Box
              flex={isTablet ? 1 : 'auto'}
              display={'flex'}
              flexDirection={'column'}
              gap={'12px'}
              justifyContent={'center'}
              pl={'16px'}
              height={isDesktop ? '100%' : '74px'}
              borderBottom={isTablet ? 'none' : '3px solid'}
              borderColor={'brand.200'}
              minWidth={'100px'}
              cursor={'pointer'}
              width={'100%'}
            >
              <Text
                fontSize={'12px'}
                color={error && !guests ? 'red' : 'black'}
              >
                GUESTS
              </Text>
              <Heading fontSize={'12px'} fontWeight={'200'} color={'brand.700'}>
                {guests || 'Add Guests'}
              </Heading>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody px={0}>
              <Box pt={'20px'}>
                <List display={'flex'} flexDirection={'column'} gap={'4px'}>
                  <ListItem
                    onClick={() => setGuests(1)}
                    key={1}
                    sx={{
                      py: '6px',
                      px: '12px',
                      cursor: 'pointer',
                      backgroundColor:
                        guests === 1 ? 'brandAlpha.200' : 'transparent',
                      '&:hover': { backgroundColor: 'brandAlpha.400' },
                    }}
                  >
                    1
                  </ListItem>
                  <ListItem
                    onClick={() => setGuests(2)}
                    key={2}
                    sx={{
                      py: '6px',
                      px: '12px',
                      cursor: 'pointer',
                      backgroundColor:
                        guests === 2 ? 'brandAlpha.200' : 'transparent',
                      '&:hover': { backgroundColor: 'brandAlpha.400' },
                    }}
                  >
                    2
                  </ListItem>
                  <ListItem
                    onClick={() => setGuests(3)}
                    key={3}
                    sx={{
                      py: '6px',
                      px: '12px',
                      cursor: 'pointer',
                      backgroundColor:
                        guests === 3 ? 'brandAlpha.200' : 'transparent',
                      '&:hover': { backgroundColor: 'brandAlpha.400' },
                    }}
                  >
                    3
                  </ListItem>
                  <ListItem
                    onClick={() => setGuests(4)}
                    key={4}
                    sx={{
                      py: '6px',
                      px: '12px',
                      cursor: 'pointer',
                      backgroundColor:
                        guests === 4 ? 'brandAlpha.200' : 'transparent',
                      '&:hover': { backgroundColor: 'brandAlpha.400' },
                    }}
                  >
                    4
                  </ListItem>
                </List>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Button
          flex={isTablet ? 1 : 'auto'}
          width={isDesktop ? 'auto' : '100%'}
          variant={'solid'}
          height={isDesktop ? '100%' : '74px'}
          bgColor={'brand.700'}
          minW={'min-content'}
          onClick={() => submitForm()}
          backgroundColor={'background.light'}
          fontWeight={'200'}
          color={'background.dark'}
          lineHeight={1}
        >
          CHECK AVAILABILITY
        </Button>
      </Box>
    </>
  );
};

export default BookingWidget;
